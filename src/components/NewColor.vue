<template>
    <div id="new-color">
      <h4>Add a new color</h4>
    
      <form @submit.prevent="saveColor">
      
       <div class="row">
        <div class="input-field col s4 offset-s4">
         <input placeholder="add a color" v-model="color_EN" required>
         <input placeholder="add a color" v-model="color_IT" required>
          <button type="submit" class="btn">Add color</button>
        </div>
       
        </div>
      </form>
    </div>
</template>
<script>
    import db from './firebaseInit'
    export default{
        name :'new-color',
        data(){
            return{
                color_EN: null,
                color_IT: null
            }
        },
        methods: {
            saveColor(){
                db.collection('colors_EN').add({
                    color_EN: this.color_EN,
                    color_IT: this.color_IT
                })
                .then(docRef => this.$router.push('/colorboard'))
                .catch(err => console.log(err))
            }
        }

    }
</script>
<style scoped>
#new-color{
    text-align: center;
}


</style>