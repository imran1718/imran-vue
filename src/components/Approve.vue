<template>
  <div>
      <header>
      <NavBar />
      <b-container>
        <h1>Approve Institute</h1>
    <b-table class="pt-5" hover responsive :items="items"></b-table>
      </b-container>
      </header>                      
           <div>
              <br>
          </div>
           <div>
              <br>
          </div>
           <div>
              <br>
          </div>
                  
                  
   <b-jumbotron bg-variant="#e9ecef" class="jumbo pt-5" text-variant="dark" border-variant="gray">
    <p>Developed & Maintained by :ITSG(Information Technology Support
            Group), K.L.N. College of Information Technology. Copyright @ 2017
            K.L.N. College of Information Technology.<p> All rights reserved.</p>
    <b-button variant="primary" href="#">More Info</b-button>
  </b-jumbotron>
     
         
 
  </div>
</template>

<script>
import NavBar from "./Navbar";
  export default {
       name: "Admin",
  components: {
    NavBar,
  },
    data() {
      return {
        items: [
          {
            college_id: '1',
            college_name: 'KLNCIT',
            college_status: 'Approved',
           
          },
          {
           college_id: '1',
            college_name: 'KLNCE',
            college_status: 'Approved',

          },
          
        ]
      }
    }
  }
</script>
<style scoped>
.jumbo{
  padding: 2rem 1rem;
   
    background-color: #e9ecef;
    border-radius: .3rem;
}
</style>