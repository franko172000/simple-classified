<template>
    <div>
        <banner class="inner-banner">
            <h1>Post New Ad</h1>
        </banner>

        <div class="h-100 w-full flex items-center justify-center bg-teal-lightest">
            <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-2/4  bottom-border-style">
                 <a-form>
                    <div>
                        <a-form-item label="Post title">
                            <a-input placeholder="Enter your first name" name="firstname" size="large" v-decorator="['firstname',{rules: [{ required: true, message: 'Please enter first name' }] }]" />
                        </a-form-item>
                        <a-form-item label="Excerpt">
                            <a-input placeholder="Enter your last name" name="lastname" size="large" v-decorator="['lastname',{rules: [{ required: true, message: 'Please enter last name' }] }]" />
                        </a-form-item>
                        <a-form-item label="Email Address">
                            <a-input placeholder="Email Address" name="email" size="large" v-decorator="['email',{rules: [{type: 'email',message:'Please enter a valid email'},{ required: true, message: 'Please enter addesss' }] }]" />
                        </a-form-item>
                        <a-form-item label="Password">
                            <a-input-password placeholder="Enter Password" name="password" size="large" v-decorator="['password',{rules: [{ required: true, message: 'Please enter password' }] }]" />
                        </a-form-item>
                        <a-form-item label="Confirm Password">
                            <a-input-password placeholder="Confirm Password" name="conf_password" size="large" v-decorator="['conf_password',{rules: [{ required: true, message: 'Please enter password' }] }]" />
                        </a-form-item>
                        <a-button
                        type="primary"
                        size="large"
                        class="text-center w-100"
                        htmlType="submit">
                        <strong>Register</strong>
                        </a-button>
                    </div>
                </a-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>