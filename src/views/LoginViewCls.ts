import { Component, Vue } from "vue-property-decorator";


@Component
export default class LoginViewCls extends Vue {
    public login(): void{
        this.$store.dispatch('login')
    }

    public logout(): void{
        this.$store.dispatch('logout')
    }
}


