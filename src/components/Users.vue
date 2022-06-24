<template>
    <div>
        <div v-for="(user, key) in users" :key="key">
            <div>
                {{ user.name }} 
                {{ user.age }}
            </div>
        <button @click="deleteUser(key)">Delete </button>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Users',
    data () {
        return {
        
            users: [{
                name: 'John',
                age: 20,
            }, {
                name: 'Ben',
                age: 21
            }, {
                name:'Ann',
                age: 20
            }],
            tempUser: '',
        }
    },
    methods: {
        addUser() {
            this.users.push(this.tempUser);
            this.tempUser = ''
        },
        deleteUser(i) {
            this.users.splice(i, 1)
        }
  
    }
}
</script>


<style >

</style>