<template>
  <div>
       <NavBar />
     
     <b-container>
         
        <h1>Colleges</h1>
         <b-container>
         <b-table-simple responsive :users="users"  class="table table-striped table-bordered" >
            <b-thead>
                <b-tr>
                    <b-th>Student Name</b-th>
                    <b-th>Mobile</b-th>
                     <b-th>Mobile</b-th>             
                    <b-th>Email-id</b-th>
                    <b-th>Address</b-th>
                    <b-th>College</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="user in users" :key="user.id">
                    <b-td>{{user.firstName}} {{user.lastName}}</b-td>
                     <b-td>{{user.email}}</b-td>
                    <b-td>{{user.mobile}}</b-td>
                    <b-td>{{user.email}}</b-td>                    
                    <b-td>{{user.address}}</b-td>
                    <b-td>{{user.college}}</b-td>
                    
                </b-tr>
            </b-tbody>
         </b-table-simple>
         </b-container>
     </b-container>
     <Footer />
  </div>       
</template>
<script>
import NavBar from "./Navbar";
import Footer from "./Footer";
  export default {
       name: "Delete",       
  components: {
    NavBar,
    Footer
  },
    data() {
      return {
        users: [
                { firstName: 'Frank', lastName: 'Murphy',mobile:9090123463, email: 'frank.murphy@test.com',address:'madurai', college: 'User' },
                { firstName: 'Vic', lastName: 'Reynolds',mobile:9090123463, email: 'vic.reynolds@test.com',address:'madurai', college: 'Admin' },
                { firstName: 'Gina', lastName: 'Jabowski',mobile:9090123463, email: 'gina.jabowski@test.com',address:'madurai', college: 'Admin' },
                { firstName: 'Jessi', lastName: 'Glaser',mobile:9090123463, email: 'jessi.glaser@test.com', address:'madurai',college: 'User' },
                { firstName: 'Jay', lastName: 'Bilzerian',mobile:9090123463, email: 'jay.bilzerian@test.com', address:'madurai',college: 'User' }
            ]
      }
    }
  }
</script>