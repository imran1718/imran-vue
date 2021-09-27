    <template>
      <!-- Admin Form -->
     <div>
      <b-modal id="modal-1" title="Login" hide-footer>       
          <form ref="form" @submit.stop.prevent="onSubmit">
           <b-form-group>
               <b-form-radio-group v-model="selected">
                 <b-container>
                   <b-row>
                     <b-col>       
                     <b-form-radio id="customRadioInline1" v-model="selected" v-bind:value="1">Admin</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio id="customRadioInline2" v-model="selected" v-bind:value="2">College</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio id="customRadioInline3" v-model="selected" v-bind:value="3" >Student</b-form-radio>
                     </b-col>
                   </b-row>
                </b-container>
               </b-form-radio-group>
            </b-form-group>                     
            <b-form-group  class="pt-3" id="ad" label="User Name:">             
              <b-form-input id="input-2"
               name="input-1"  
               v-model="$v.form.name.$model" 
               :state="validateState('name')" 
               class="form-control"
               placeholder="Enter User name" ></b-form-input>
                <b-form-invalid-feedback  id="input-1-live-feedback">This is a  First name field and must be at least 5 characters.
                  </b-form-invalid-feedback>
            </b-form-group>
             <b-form-group  label="Password:">        
              <b-form-input id="input-2"
               name="input-2"  
               v-model="$v.form.pass.$model" 
               :state="validateState('pass')" type="password" 
                class="form-control" 
                placeholder="Enter Password"></b-form-input>   
                 <b-form-invalid-feedback  id="input-2-live-feedback">This is a  First name field and must be at least 6 characters.
                  </b-form-invalid-feedback>           
            </b-form-group>
            <div class="pt-5">
              <b-button  class="form-control " type="submit"  variant="btn btn-outline-success">Submit</b-button>   
            </div>      
            <div class="pt-3">
              <b-button class="form-control" type="reset" @click="resetForm()" variant="btn btn-outline-danger">Reset</b-button>   
            </div>        
          </form>       
      </b-modal>
     </div>
      <!-- Admin Form End -->
    </template>
<script>
import { validationMixin } from 'vuelidate'
import { required,minLength} from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  mixins: [validationMixin],
  data() {
      return {
          selected: '1',
          role:'',
          form: {
          name:null,
          pass:null,
         }
      };
    },
    validations: {
    form: {
      name: {
        required,
         minLength: minLength(5)
      },
      pass: {
        required,
        minLength: minLength(6)
      },
  }
    },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        name:null,
        pass:null,
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
  onSubmit() {
      this.$v.form.$touch();
if (this.selected==1) {
    if (this.$v.form.$anyError) {
        return;
      }
        alert("Admin Form submitted!");
        window.open("Admin");
       location.reload();

}
else if (this.selected==2) {
if (this.$v.form.$anyError) {
        return;
      }
        alert("college Form submitted!");
       window.open("College");
       location.reload();
}
else if (this.selected==3) {
if (this.$v.form.$anyError) {
        return;
      }
        alert("student Form submitted!");
       window.open("Student");
       location.reload();
}
    }
  }
};
</script>






  
