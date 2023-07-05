<template>
    <div class="main"> 
        <h1>
            FIRE IN THE HOUSE!
        </h1>
        <div class="text" v-show="showText">
            Sua casa está pegando fogo! <Br/>
            Quais items vai salvar?
        </div>

        <div class="lista" v-show="showLista">
            <ul>
                <li @click="showItem('bicicleta')">bicicleta</li>
                <li @click="showItem('lapiz')">lapiz</li>
                <li @click="showItem('ps5')">ps5</li>
                <li @click="showItem('livro')">livro</li>
            </ul>
        </div>

        <div class="selecionados" v-show="yesLista">
            <h3> Selecionados </h3>
            <ul>
                <li v-for="item in selectedItems" :key="item">{{ item }}</li>
            </ul>
        </div>

        <Button @click="hideText"/>

    </div>
</template>

<script>
import Button from "./../components/Button"

export default {
    name: 'FireHouse',
    components:{
        Button,
    },
    data(){
        return{
            showText:true,
            showLista:false,
            yesLista: false,
            selectedItems: [],
        }
    },
    methods:{
        hideText(){
            if (this.showText === false && this.showLista === true && this.selectedItems.length !== 0) {
                this.$router.push('/Result');
            }else{
                this.showText = false;
                this.showLista = true;  
            }            
        },
        showItem(item) {
            if (!this.selectedItems.includes(item)) {
                this.yesLista = true;
                this.selectedItems.push(item);
            }
        },
    }
}
</script>

<style>

.main {
    background-image: url(../assets/casaChamas.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;  
    height: 100%;


    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1{
    font-size:50px;    
    color: white;
}

.text{
    margin-top:10%;
    margin-Bottom:3%;
    text-align:center;
    font-size: 40px;
    background-color:aquamarine;
    height: 20%;
    width: 50%;
    border-radius: 40px;
    display:flex;
    justify-content: center;
    align-items: center;
}


.lista{
    margin-top:3%;
    margin-Bottom:3%;
    text-align:center;
    font-size: 30px;
    background-color:aquamarine;
    height: 25%;
    width: 50%;
    border-radius: 40px;
    display:flex;
    justify-content: center;
    align-items: center;
}


.selecionados{
    margin-top:3%;
    margin-Bottom:3%;
    text-align:center;
    font-size: 30px;
    background-color:greenyellow;
    height: 25%;
    width: 50%;
    border-radius: 40px;
    display:flex;
    justify-content: center;
    align-items: center;

}
</style>