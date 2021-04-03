<template>
    <div id="auth">
        <div class="bg-section login-bg">
            <div class="nav"><router-link to="/" class="text-primary"><i class="fas fa-arrow-left"></i></router-link></div>
            <div class="body-text">
                <h1>Welcome back</h1>
                <p>Please sign in to your account</p>
            </div>
        </div>
        <div class="form-section">
            <h2>Login</h2>
            <div class="form">
                    <a-form :form="form" @submit.prevent="handleLogin">
                    <div>
                        <a-form-item label="Email Address">
                            <a-input placeholder="Email Address" name="email" size="large" v-decorator="['email',{rules: [{type: 'email',message:'Please enter a valid email'},{ required: true, message: 'Please enter addesss' }] }]" />
                        </a-form-item>
                        <a-form-item label="Password">
                            <a-input-password placeholder="Enter Password" name="email" size="large" v-decorator="['password',{rules: [{ required: true, message: 'Please enter password' }] }]" />
                        </a-form-item>
                        <a-button
                        type="primary"
                        size="large"
                        class="text-center w-100"
                        :loading="loading"
                        htmlType="submit"
                        >
                        <strong>Sign In</strong>
                        </a-button>
                    </div>
                </a-form>
                <div><p class="text-center">Don't have an account? <router-link to="/auth/register" class="text-primary">Create one now</router-link></p></div>
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
            handleLogin(){
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.$store.dispatch('user/loginUser', {payload: values});
                    }
                });
            }
        },
        mounted(){}
    }
</script>