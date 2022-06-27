<template>
    <div>
        <div v-for="(user, key) in users" :key="key">
            <div>
                {{ user.name }} 
                {{ user.surname }} 
                {{ user.age }}
            </div>
        <button @click="deleteUs(key)">Delete </button>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Users',
    data () {
        return {
        
        }
    },
    props: {
        users: Array
    },
    methods: {
        deleteUs(i) {
            //this.users.splice(i, 1)
            this.$emit("deleteUser", i)
            
        }
  
    }
}
</script>


<style >

</style>