import Vee from 'vee-validate'
import Validator from './Validator'

export default {
    install(Vue){

        Vue.use(Vee)

        Vue.mixin({
            beforeCreate(){
                let _this = this;
                this.$form = (form) => {
                    return (new Validator(form, _this.$validator))
                }
            }
        })
    }
}