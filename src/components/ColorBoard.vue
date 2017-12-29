<template>
 <div>
   <h2>Colorboard</h2>
   <div id="get-color">
   <button @click="getColor" class="btn">Get color</button> 
   </div><!--end of button -->
   <div id="start-game"
        v-if="gameOverMsg === true"
    >
    <button 
    @click="startGame" 
    class="btn orange lighten-1"
    >Start new game
    </button>
   </div>
   <div class="row">
        <div class="col s4 offset-s4">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span v-if="gameOverMsg === false" class="card-title">{{color}}</span>
              <h4 v-if="gameOverMsg === true">Game Over. Try  again</h4>
              <div class="row">
               <div class="input-field col s6">
               <input 
                placeholder="Enter the color" 
                id="answer" 
                type="text" 
                class="validate"
                v-model="answer">
               </div>
            </div> <!-- end of input -->
            </div>
           
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div> <!-- end of simple card --> 
 </div> 
</template>
<script>
import db from './firebaseInit'
    export default{
        name: "ColorBoard",
        data (){
         return{
            colors: [],
            color: null,
            gameOverMsg: false,
            answer: null
         }
        },
        created(){
            db.collection('colors_EN').get().then(querySnapshot => {
             querySnapshot.forEach(doc =>{
                 console.log(doc.data().color_EN);
                 const data = doc.data().color_EN;
                 this.colors.push(data)
             })
            }) 
        },
        methods:{
            getColor(){
                if(this.colors.length > 0){
                let color = this.colors[Math.floor(Math.random()*this.colors.length)]
                console.log(color)
                this.color = color;
                const index = this.colors.indexOf(color)
                this.colors.splice(index,1)
                }else{
                  console.log("game over. try again") 
                  this.gameOverMsg = true
                }
            },
            startGame(){
                db.collection('colors_EN').get().then(querySnapshot => {
             querySnapshot.forEach(doc =>{
                 console.log(doc.data().color_EN);
                 const data = doc.data().color_EN;
                 this.colors.push(data)
             })
            }) 
                this.gameOverMsg = false
            }
        }
       
    }
</script>
<style scoped>
h2{
    color:#26a69a;
}
.card{
    margin-top:50px;
}
#start-game{
    margin-top: 15px;
}
</style>