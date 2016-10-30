export default class {

    constructor(form, Validator){

        this._rules = {}
        this._fields = {}

        this.$validator = Validator;

        this.$errors = this.$validator.errorBag

        this.$rules = new Proxy(this._rules, this.watcher());
        this.$fields = new Proxy(this._fields, this.watcher());

        Object.keys(form).forEach((key) => {
            this.$rules[key] = form[key].rule;
            this.$fields[key] = form[key].value;
        })

        this.$errors.clear();
    }

    watcher(){

        let _this = this;

        return {
            get(target, name){
                return target[name]
            },
            set(target, name, val){
                if(val){
                    if(target == _this._rules) _this.$validator.attach(name, val);
                    target[name] = val;
                }else{
                    if(target == _this._rules) _this.$validator.detach(name)
                    delete target[name]
                }

                _this.$validator.validate(name, _this.$fields[name]);

                return true;
            }
        }
    }

}