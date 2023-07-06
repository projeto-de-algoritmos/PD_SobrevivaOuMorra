<template>
    <div class="main">
        <h1>
            FIRE IN THE HOUSE!
        </h1>
        <div class="text" v-show="showText">
            Imagine que você está em uma casa em chamas e tem apenas alguns minutos para pegar itens importantes antes de escapar. <br/>
            Você precisa tomar decisões rápidas para garantir sua sobrevivência. <br/> 
            Quais itens da sua casa você escolheria salvar?
        </div>

        <div class="lista" v-show="showLista">
            <ul>
                <li v-for="item in itens" :key="item" @click="showItem(item)">{{ item.nome }}</li>
            </ul>
        </div>

        <div class="selecionados" v-show="yesLista">
            <h3> Selecionados </h3>
            <ul>
                <li v-for="item in selectedItems" :key="item">{{ item.nome }}</li>
            </ul>
        </div>

        <Button @click="hideText" :buttonName="nomeBotao"/>

    </div>
</template>

<script>
import Button from "./../components/Button"
import itensJson from '../../db/db.json';

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
            itens: [],
            selectedItems: [],
            nomeBotao: " continuar "
        }
    },
    mounted() {
    this.itens = itensJson.objetos_quarto;
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
                localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
            }
        },
    }
}
</script>

<style src ="../css/FireHouse.css"></style>