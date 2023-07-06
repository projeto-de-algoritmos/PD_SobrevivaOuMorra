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
                <li v-for="item in itens" :key="item" @click="showItem(item)">{{ item.nome }}</li>
            </ul>
        </div>


        <div class="selecionados" v-show="yesLista">
            <h3> Selecionados </h3>
            <ul>
                <li v-for="item in selectedItems" :key="item">{{ item.nome }}</li>
            </ul>
        </div>

        <Button @click="hideText"/>

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