<template>
    <div>
        <banner class="inner-banner" :showHomeButton="true">
            <h1>Post New Ad</h1>
        </banner>

        <div class="h-100 w-full flex items-center justify-center bg-teal-lightest">
            <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-2/4 border-gray-300 border bottom-border-style">
                 <a-form :form="form" @submit.prevent="uploadPost">
                    <div>
                        <a-form-item label="Post title">
                            <a-input placeholder="Enter your post title" name="title" size="large" v-decorator="['title',{rules: [{ required: true, message: 'Please enter post title' }] }]" />
                        </a-form-item>
                        <a-form-item label="Excerpt">
                            <a-input rows="5" type="textarea" v-decorator="['excerpt',{rules: [{ required: true, message: 'Please enter excerpt' }] }]"  />
                        </a-form-item>
                        <a-form-item label="Description">
                            <a-input rows="10" type="textarea" v-decorator="['description',{rules: [{ required: true, message: 'Please enter description' }] }]"  />
                        </a-form-item>
                        <a-form-item label="Ad Photo">
                            <a-button htmlType="button" @click.prevent="triggerClick" :loading="tmpPhotos.uploadImgProgress">
                                  <a-icon type="upload" />Click to select photo
                              </a-button>
                              <div class="flex" v-for="(img, index) in tmpPhotos.listingPhotos" :key="index">
                                <div class="bg-white w-2/4 flex items-center p-2 rounded shadow border m-1">
                                    <div class="flex items-center space-x-4">
                                      <img :src="img.photo" alt="My profile" class="w-16 h-16 rounded-xl">
                                    </div>
                                    <div class="flex-grow p-3">
                                      <div class="text-sm text-gray-500">
                                        img.filename
                                      </div>
                                    </div>
                                    <div class="p-2">
                                      <button @click="removeImage(img)"><i class="fas fa-trash"></i></button>
                                    </div>
                                  </div>
                              </div>
                              
                        </a-form-item>
                        <div class="col-2-grid">
                            <a-form-item label="Price">
                                <a-input placeholder="Enter price" name="price" size="large" v-decorator="['price',{rules: [{ required: true, message: 'Please enter price' }] }]" />
                            </a-form-item>
                            <a-form-item label="Currency">
                                <a-select size="large" v-decorator="['currency',{rules: [{ required: true, message: 'Please select currency' }] }]" >
                                    <a-select-option :value="currency.code" v-for="(currency,index) in currencies" :key="index" >
                                        {{currency.name}}
                                    </a-select-option>
                                  </a-select>
                            </a-form-item>
                        </div>
                        <div class="col-2-grid">
                            <a-form-item label="Category">
                                 <a-select size="large" v-decorator="['category',{rules: [{ required: true, message: 'Please select category' }] }]">
                                    <a-select-option :value="category.id" v-for="(category,index) in getCategories" :key="index" >
                                        {{category.name}}
                                    </a-select-option>
                                  </a-select>
                            </a-form-item>
                            <a-form-item label="Location">
                                <a-select size="large" v-decorator="['location',{rules: [{ required: true, message: 'Please select location' }] }]">
                                    <a-select-option :value="location.code" v-for="(location,index) in getLocations" :key="index" >
                                        {{location.name}}
                                    </a-select-option>
                                  </a-select>
                            </a-form-item>
                        </div>
                        
                        <a-button
                        type="primary"
                        size="large"
                        class="text-center w-100"
                        :loading="uploadProgress"
                        htmlType="submit">
                        <strong>Submit</strong>
                        </a-button>
                    </div>
                </a-form>
                <form>
                    <input type="file" ref="filePic" name="profile_photo" @change="onSelectedPhoto" v-show="false" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import {getLocations, getAllCategories} from '../../services/requests/public';
import {saveAdPost} from '../../services/requests/user';
export default {
    data(){
        return{
            uploadProgress: false,
            images:[],
            categories:[],
            locations: [],
            currencies: [
                {
                    name: 'Naira',
                    code: 'NGN'
                },
                {
                    name: 'US Dollars',
                    code: 'USD'
                },
            ],
            form: this.$form.createForm(this),
        }
    },
    computed:{
        ...mapState(['tmpPhotos']),
        getLocations(){
            return this.locations;
        },
        getCategories(){
            return this.categories;
        }
    },
    methods:{
        checkFile(file){
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp';
              if (!isJpgOrPng) {
                this.$notification.error({
                    message: 'You can only upload JPG & PNG file!'
                });
              }
              const isLt2M = file.size / 1024 / 1024 < 2;
              if (!isLt2M) {
                this.$notification.error({
                    message: 'Image must smaller than 2MB!'
                });
              }
              return isJpgOrPng && isLt2M;
        },
        triggerClick(){
            this.$refs.filePic.click();
        },
        onSelectedPhoto(e){
            const file = e.target.files[0];
            if(!this.checkFile(file)){
                return false;
            }
                this.imgSrc =  URL.createObjectURL(e.target.files[0]);
                let data = new FormData();
                data.append('photo', this.$refs.filePic.files[0]);
                this.$store.dispatch('tmpPhotos/processPhoto', {payload: data});
        },

        removeImage(imgData){
            const __this = this;
            this.$modal.confirm({
                title: "Delete image?",
                async onOk() {
                    __this.$store.dispatch('tmpPhotos/deletePhoto', {payload: imgData});
                }
            })
        },

        async uploadPost(){
            const __this = this;
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    if(__this.$store.state.tmpPhotos.listingPhotos.length === 0){
                        __this.$notification.error({
                            message: 'You must upload atleast one image'
                        })
                        return 
                    }

                    __this.uploadProgress = true;

                    values['images'] = __this.$store.state.tmpPhotos.listingPhotos;

                    saveAdPost(values).then(res=>{
                         __this.$notification.success({
                            message: 'Ad was posted successfully!'
                        });
                        __this.uploadProgress = false;

                        //clear storage
                        __this.$store.dispatch('tmpPhotos/removeTempImages');

                        __this.form.resetFields();

                        __this.$router.push('/user/my-listings');
                    })
                   
                }
            });
        }
    },
    mounted(){
        getLocations()
        .then(res=>{
            this.locations = res.data.data;
        })
        getAllCategories()
        .then(res=>{
            this.categories = res.data.data;
        })
    }
}
</script>