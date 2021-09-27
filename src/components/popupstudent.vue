<template>

<!-- Student REGISTARTION FORM START -->

<div >
       <b-modal id="modal-2" title="Student Registration" hide-footer>
          <b-form ref="form" @submit.stop.prevent="onSubmit">
            <b-form-group label="First name:">
               <b-form-input
               id="example-input-1"
               name="example-input-1"  
               v-model="$v.form.fname.$model" 
               :state="validateState('fname')"
               placeholder="Enter your First name"></b-form-input>
            <b-form-invalid-feedback  id="input-1-live-feedback">This is a  First name field and must be at least 3 characters.
                  </b-form-invalid-feedback>
            </b-form-group><br>
            <b-form-group label="Last name:">
               <b-form-input
                id="example-input-2"
                name="example-input-2"  
                v-model="$v.form.lname.$model"
                :state="validateState('lname')"
                placeholder="Enter your Last name"></b-form-input>
            <b-form-invalid-feedback  id="input-2-live-feedback">This is a Last name field and must be at least 3 characters.
                  </b-form-invalid-feedback>
            </b-form-group><br>
            <b-form-group label="Username:">
               <b-form-input 
                 id="example-input-3"
                name="example-input-3"  
               v-model="$v.form.user.$model" 
               :state="validateState('user')"
               placeholder="Enter your Username"></b-form-input>
                <b-form-invalid-feedback  id="input-3-live-feedback">This is a Username field and must be at least 6 characters.
                  </b-form-invalid-feedback>
            </b-form-group><br>
            <b-form-group label="Password:">
               <b-form-input 
                 id="example-input-4"
                name="example-input-4" 
                type="password" 
               v-model="$v.form.stupass.$model"
                :state="validateState('stupass')"
                placeholder="Enter your Password"></b-form-input>
                 <b-form-invalid-feedback  id="input-4-live-feedback">This is a Password field and must be at least 6 characters.
                  </b-form-invalid-feedback>
            </b-form-group><br>
            <b-form-group label="Mobile Number:">
               <b-form-input 
               id="example-input-5"
                name="example-input-5"  
                type="number"
               v-model="$v.form.phone.$model" 
               :state="validateState('phone')"
                placeholder="Enter your Mobile Number"></b-form-input>
                 <b-form-invalid-feedback  id="input-5-live-feedback">Please Fill the Mobile Number field .
                  </b-form-invalid-feedback>
            </b-form-group><br>
            <b-form-group label="E-mail:">
               <b-form-input 
               id="example-input-6"
                name="example-input-6"  
               v-model="$v.form.mail.$model" 
               :state="validateState('mail')"
                placeholder="Enter your E-mail"></b-form-input>
                 <b-form-invalid-feedback  id="input-6-live-feedback">This is a  E-mail field and must be example@gmail.com.
                  </b-form-invalid-feedback>
            </b-form-group><br>
            <b-form-group label="Address:">
               <b-form-input 
                id="example-input-7"
                name="example-input-7"  
               v-model="$v.form.address.$model"
                :state="validateState('address')"
                placeholder="Enter your Address"></b-form-input>
                 <b-form-invalid-feedback  id="input-7-live-feedback">Please fill the  Address field .
                  </b-form-invalid-feedback>
            </b-form-group><br>
            <!-- <b-form-group label="College:">
                <b-form-select class="form-control" v-model="selected" :options="colleges"></b-form-select>
            </b-form-group><br> -->
            <div class="text-center">
             <b-button type="submit" variant="outline-success">Submit</b-button>
              <b-button variant="outline-danger" @click="resetForm()" class="mx-3">Reset</b-button>
            </div>
         </b-form>
       </b-modal>
    </div>
      <!-- Student REGISTARTION FORM END       -->


</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength,minLength,email} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
   
      form: {
        fname: null,
        lname:null,
        user:null,
        stupass:null,
        address:null,
        phone:null,
        mail:null,
        // college:null,
      }
    };
  },
  validations: {
    form: {
  
      fname: {
        required,
        minLength: minLength(3)
      },
      lname: {
        required,
        minLength: minLength(3)
      },
      user: {
        required,
        minLength: minLength(6)
      },
      stupass: {
        required,
        minLength: minLength(6)
      },
      address: {
        required,
        minLength: minLength(8)
      },
     phone: {
      required,    
     maxLength: maxLength(10),
     minLength:minLength(10)
    },
    mail: {
      required,
        email,
      },
    }
  },
  methods: {
    validateState(fname) {
      const { $dirty, $error } = this.$v.form[fname];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        fname: null,
        lname:null,
        user:null,
        stupass:null,
        address:null,
        phone:null,
        mail:null,
        college:null
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
        alert("Student Registered Successfully!");
 
    }
  }
};
</script>