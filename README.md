# Vue-Easy-Validator
Easy form validator, bridge of vee-validate

## Install

  ``` bash
  npm install vue-easy-validator --save
  ```
  
  ``` js
  import VueEasyValidator from 'vue-easy-validator'
  
  Vue.use(VueEasyValidator)
  ```

## Usage

### Template
``` html
  <input v-model="form.$fields.email" type="text">
  <p v-if="form.$errors.has('email')">{{form.$errors.first('email')}}</p>
  <input v-model="form.$fields.password" type="password">
  <p v-if="form.$errors.has('password')">{{form.$errors.first('password')}}</p>
  ```
  
### Script

  ``` js
new Vue({
        data(){
            return{
                form: this.$form({
                    email: {
                        rule: 'email|required',
                        value: 'imamhatipler kapatılsın' // => set default value
                    },
                    password: {
                        rule: 'required|min:3',
                        value: null
                    }
                })
            }
        },
        mounted(){
            console.log(this.form.$fields); // => Form values (dynamic)
            console.log(this.form.$rules); // => Form rules (dynamic)
            console.log(this.form.$errors); // Form errors (instance of vee-validate errorBag)
            console.log(this.$validator); // => vee-validate instance
        }
    })
  ```
