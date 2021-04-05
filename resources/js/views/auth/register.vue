<template>
    <div id="auth">
        <div class="bg-section register-bg">
            <div class="nav"><router-link to="/" class="text-primary"><i class="fas fa-arrow-left"></i></router-link></div>
            <div class="body-text">
                <h1>Register for free</h1>
                <p>Create an account to enjoy full features of Classic Ads</p>
            </div>
        </div>
        <div class="form-section">
            <h2>Create Account</h2>
            <div class="form">
                    <a-form :form="form" @submit.prevent="handleRegistration">
                    <div>
                        <a-form-item label="First name">
                            <a-input placeholder="Enter your first name" name="firstname" size="large" v-decorator="['firstname',{rules: [{ required: true, message: 'Please enter first name' }] }]" />
                        </a-form-item>
                        <a-form-item label="Last name">
                            <a-input placeholder="Enter your last name" name="lastname" size="large" v-decorator="['lastname',{rules: [{ required: true, message: 'Please enter last name' }] }]" />
                        </a-form-item>
                        <a-form-item label="Email Address">
                            <a-input placeholder="Email Address" name="email" size="large" v-decorator="['email',{rules: [{type: 'email',message:'Please enter a valid email'},{ required: true, message: 'Please enter addesss' }] }]" />
                        </a-form-item>
                        <a-form-item label="Password">
                            <a-input-password placeholder="Enter Password" name="password" size="large" v-decorator="['password',{rules: [{ required: true, message: 'Please enter password' }, {
                                validator: validateToNextPassword,
                            }] }]" />
                        </a-form-item>
                        <a-form-item label="Confirm Password">
                            <a-input-password placeholder="Confirm Password" name="conf_password" size="large" v-decorator="['conf_password',{rules: [{ required: true, message: 'Please enter password' }, {
                                validator: compareToFirstPassword,
                            }] }]" />
                        </a-form-item>
                        <a-button
                        type="primary"
                        size="large"
                        class="text-center w-100"
                        :loading="loading"
                        htmlType="submit"
                        >
                        <strong>Register</strong>
                        </a-button>
                    </div>
                </a-form>
                <div><p class="text-center">Already a member? <router-link to="/auth/login" class="text-primary">Login now</router-link></p></div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return {
                user:{
                    email:"",
                    password:"",
                },
                form: this.$form.createForm(this),
            }
        },
        computed: {
            loading() {
                return this.$store.state.user.loading
            },
        },
        methods:{
            compareToFirstPassword(rule, value, callback) {
                const form = this.form;
                    if (value && value !== form.getFieldValue('password')) {
                        callback('Two passwords that you enter is inconsistent!');
                    } else {
                        callback();
                    }
            },
            validateToNextPassword(rule, value, callback) {
                const form = this.form;
                if (value && this.confirmDirty) {
                    form.validateFields(['conf_password'], { force: true });
                }
                callback();
            },
            handleRegistration(){
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.$store.dispatch('user/register', {payload: values})
                    }
                });
            }
        },
        mounted(){}
    }
</script>