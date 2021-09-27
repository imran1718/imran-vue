<template>
  <div>
      
      <NavBar />
     <b-container>
        <h1>Colleges</h1>
        <b-table class="pt-5" hover responsive :items="items"></b-table>
     </b-container>
  </div>       
</template>
<script>
import NavBar from "./Navbar";
  export default {
       name: "Viewstudent",
  components: {
    NavBar,
  },
    data() {
      return {
        items: [
          {            
            student_name: 'Imran',
            mobile: '9021436587',
            email_id: 'imran@gmail.com',
            address: 'madurai',
            college:'KLNCIT'
           
          },
         {            
            student_name: 'Harish',
            mobile: '9026587143',
            email_id: 'Harish@gmail.com',
            address: 'madurai',
            college:'KLNCE'
           
          },
           {            
            student_name: 'Mani',
            mobile: '9036214587',
            email_id: 'Mani@gmail.com',
            address: 'madurai',
            college:'KLNCIT'
           
          },
          {            
            student_name: 'Hari',
            mobile: '9214503687',
            email_id: 'Hari@gmail.com',
            address: 'madurai',
            college:'KLNCIT'
           
          },
          {
            student_name: 'Kaja',
            mobile: '9145870362',
            email_id: 'Kaja@gmail.com',
            address: 'madurai',
            college:'KLNCIT'

          },          
        ]
      }
    }
  }
</script>