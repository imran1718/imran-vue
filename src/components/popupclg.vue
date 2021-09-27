<template>
  <div>
    <!-- College Registration form start-->
    <div >
       <b-modal id="modal-3" title="College Registration" hide-footer>
          <b-form ref="form"  @submit.stop.prevent="onSubmit">
            <b-form-group id="example-input-group-1"  label="College Name:" label-for="example-input-1">
                  <b-form-input  id="example-input-1" name="example-input-1" v-model="$v.form.ClgN.$model"
                                 :state="validateState('ClgN')" placeholder="Enter your CollegeName">
                  </b-form-input>
                  <b-form-invalid-feedback  id="input-1-live-feedback">This is a required field and must be at least 6 characters.
                  </b-form-invalid-feedback>
            </b-form-group><br>
            <b-form-group label="Username:" >
                 <b-form-input id="example-input-2"  name="example-input-2" v-model="$v.form.Usern.$model"
                           :state="validateState('Usern')" placeholder="Enter your Username">
                 </b-form-input>
                 <b-form-invalid-feedback  id="input-2-live-feedback">This is a required field and must be at least 6 characters.
                 </b-form-invalid-feedback>
            </b-form-group><br>
            <b-form-group label="Password:">
                <b-form-input id="example-input-3" type="password"  name="example-input-3" v-model="$v.form.passw.$model"
                    :state="validateState('passw')" placeholder="Enter your Password" >
                </b-form-input>
                <b-form-invalid-feedback  id="input-3-live-feedback">This is a required field and must be at least 6 characters.
                </b-form-invalid-feedback>
            </b-form-group><br>
            <b-form-group label="College Phone Number:">
               <b-form-input id="example-input-4"  name="example-input-4" v-model="$v.form.clgphn.$model"
                    :state="validateState('clgphn')" type="number" placeholder="Enter your College Phone Number" >
               </b-form-input>
               <b-form-invalid-feedback  id="input-4-live-feedback">This is a required field and must be 10 numbers.
               </b-form-invalid-feedback>
            </b-form-group><br>
            <b-form-group label="College Postal Address:">
               <b-form-textarea cols="35" rows="4" id="example-input-5"  name="example-input-5" v-model="$v.form.clgadd.$model"
                    :state="validateState('clgadd')"  placeholder="Enter your College Postal Address" >
               </b-form-textarea>
               <b-form-invalid-feedback  id="input-5-live-feedback">This is a required field and must be at least 8 characters.
               </b-form-invalid-feedback>
            </b-form-group><br>
            <div class="text-center">
              <b-button type="submit" variant="outline-success">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" @click="resetForm()">Reset</b-button>
            </div>
         </b-form>
       </b-modal>
    </div>
    <!--College Registration form end-->
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength,maxLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        ClgN: null,
        Usern: null,
        passw: null,
        clgphn: null,
        clgadd: null
      }
    };
  },
  validations: {
    form: {
      Usern: {
        required,
        minLength: minLength(6)
      },
      ClgN: {
        required,
        minLength: minLength(6)
      },
      passw: {
        required,
        minLength: minLength(6)
      },
      clgphn: {
        required,
        maxLength:maxLength(10),
        minLength: minLength(10)
      },
      clgadd: {
        required,
        minLength: minLength(8)
      },
    }
  },
  methods: {
    validateState(ClgN) {
      const { $dirty, $error } = this.$v.form[ClgN];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        ClgN: null,
        Usern: null,
        passw: null,
        clgphn: null,
        clgadd: null,
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
      alert("College registered successfully !!!");
      location.reload();
    }
  }
};
</script>