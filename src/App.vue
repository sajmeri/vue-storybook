<template>
  <div id="app">

      <ul>
        <li v-for="f in frameworks" :key="f.name">
          {{f.name}} has {{f.votes}} votes
          <button v-on:click="voteFor(f)">Vote</button>
          <a href="#" v-if="editMode" v-on:click="remove(f)">Delete</a>
        </li>
      </ul>
      <p>Current Winner(s): {{winnerString}}</p>
      <p>Current Loser(s): {{loserString}}</p>
      <button type="button" v-on:click="toggleEditMode">
        <span v-if="editMode"> Done!</span>
        <span v-else>Edit!</span>
      </button>
      <input placeholder="Add new" v-if="editMode" v-on:keyup.enter="addNew">

  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
      return {
          editMode:false,
          winner: '',
          message: 'Vue is working!',
          frameworks: [
            { name: 'Vue.js', votes: 0 },
            { name: 'React', votes: 0 },
            { name: 'Angular', votes: 0 }
          ]
      }
    },
    methods: {
      voteFor: function(f) {
        f.votes += 1;
        this.save();
      },
      addNew: function(event) {
          this.frameworks.push({
            name: event.target.value,
            votes: 0
          })
        event.target.value='';
        this.save();
      },
      remove: function(f){
        this.frameworks = this.frameworks.filter(i => i != f);
        this.save();
      },
      save: function(){
        let data=JSON.stringify(this.frameworks);
        localStorage.setItem('saved',data);
      },
      load: function(){
        let data=localStorage.getItem('saved');
        if(data){
          this.frameworks=JSON.parse(data);
        }
        let editModeData=localStorage.getItem('editMode');
        if(editModeData){
          this.editMode=true;
        }
       // this.calcWinner();
      },
      toggleEditMode: function(){
        this.editMode=!this.editMode;
          //LOCALstorage can't store booleans
          //reset localstorage
          //store only if trues
          localStorage.setItem('editMode','');
          if(this.editMode==true){
            localStorage.setItem('editMode',this.editMode);
          }
      }
    },
    computed: {
      winnerString:function(){
         let scores = this.frameworks.map(f => f.votes)
         //console.log(scores);
         let highscore = Math.max.apply(Math, scores)
         //console.log(highscore);
         let bestList = this.frameworks.filter(f => f.votes == highscore)
         //console.log(bestList);
         let bestNames = bestList.map(f => f.name)
         return bestNames.join(', ')
      },
      loserString:function(){
         let scores = this.frameworks.map(f => f.votes)
         //console.log(scores);
         let lowscore = Math.min.apply(Math, scores)
         //console.log(lowscore);
         let worstList = this.frameworks.filter(f => f.votes == lowscore)
         //console.log(worstList);
         let worstNames = worstList.map(f => f.name)
         return worstNames.join(', ')
      }
    },
    created:function(){
      this.load();
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
