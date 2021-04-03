<template>
    <div>
        <header>
            <div class="content">
                <ul>
                    <li> <a href="#"> <i class="fas fa-align-left"></i></a> </li>
                    <li> <a href="#"><img src="img/logo.png" alt=""></a> </li>
                    <li> <router-link to="auth/login"> <i class="fas fa-user"></i> <span>Login</span></router-link> </li>
                </ul>
                <div class="search-form">
                    <a-input-group compact>
                      <a-select default-value="Categories" size="large">
                        <a-select-option value="Option1" >
                          Option1
                        </a-select-option>
                        <a-select-option value="Option2">
                          Option2
                        </a-select-option>
                      </a-select>
                      <a-input style="width: 50%" placeholder="Find properties, electronics, mobile phones, cars..." size="large" />
                        <a-button
                        type="primary"
                        size="large"
                        class="text-center w-100"
                        >
                        <strong>Search</strong>
                        </a-button>
                    </a-input-group>
                </div>
                <div class="actions">
                    <router-link to="/post-ad" class="btn btn-primary btn-sm"> <i class="fas fa-plus-circle"></i> Post Your Ad</router-link>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name: 'mainHeader'
}
</script>