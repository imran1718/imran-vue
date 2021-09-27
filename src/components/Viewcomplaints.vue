<template>
  <div>
      
      <NavBar />
     <b-container>
        <h1>View Compalints</h1>
        <b-table class="pt-5"  responsive :items="items"></b-table>
        <p>There are no Compalints</p>
     </b-container>
     <div class="pt-5">
        <Footer />
     </div>
       </div>     
    
</template>
<script>
import NavBar from "./Navbar";
import Footer from "./Footer";
  export default {
       name: "Viewcomplaints",
  components: {
    NavBar,
    Footer
  },
    data() {
      return {
        items: [
          {            
            college: '',
            Student: '',
            complaint_for: '',
            complaint_date:'',
            response:'',
            response_date:''           
          }
          
        ]
      }
    }
  }
</script>