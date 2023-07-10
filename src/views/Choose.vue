<template>
    <div class="main" :style="backgroundStyle">
        <h1>
           <span> {{ getComponentTitle }} </span>
        </h1>

        <div class="text" v-show="showText">
            <component :is="getComponentText" />
        </div>

        <div class="lista" v-show="showLista">
            <h4> Escolha com sabedoria</h4>
            <ul>
                <li v-for="item in itens" :key="item" @click="showItem(item)">{{ item.nome }}</li>
            </ul>
        </div>

        <div class="selecionados" v-show="yesLista">
            <h4> Selecionados </h4>
            <ul>
                <li v-for="item in selectedItems" :key="item">{{ item.nome }}</li>
            </ul>
        </div>

        <div class="button-container">
            <Button @click="hideText" :buttonName="buttonContinue"/>
            <Button @click="$router.push('/cenarios')" :buttonName="buttonVoltar"/>
        </div>
    </div>
</template>

<script>
import Button from "./../components/Button"
import itensJson from '../../db/db.json';
import EndOfTheWorld from "./../components/EndOfTheWorld"
import FireInTheHouse from "./../components/FireInTheHouse"
import ZombiApocalipse from "./../components/ZombiApocalipse"
import NaturalDisaster from "./../components/NaturalDisaster"

export default {
    name: 'FireHouse',
    components:{
        Button,
        EndOfTheWorld,
        FireInTheHouse,
        ZombiApocalipse,
        NaturalDisaster,
    },
    props: {
        propName: {
            type: String,
            required: true,
        },
    },
    computed: {
        getComponentText() {
            switch(this.propName){
                case 'FireInTheHouse':
                    return 'FireInTheHouse';
                case 'EndOfTheWorld':
                    return 'EndOfTheWorld';
                case 'ZombiApocalipse':
                    return 'ZombiApocalipse';
                case 'NaturalDisaster':
                    return 'NaturalDisaster';
                default:
                    return '';
            }
        },
        getComponentTitle(){
            switch(this.propName){
                case 'FireInTheHouse':
                    return 'FIRE IN THE HOUSE!';
                case 'EndOfTheWorld':
                    return 'THE END OF THE WORLD!';
                case 'ZombiApocalipse':
                    return 'ZOMBI APOCALIPSE';
                case 'NaturalDisaster':
                    return 'NATURAL DISASTER!';
                default:
                    return '';
            }
        },
        backgroundStyle() {
            switch (this.propName) {
                case 'FireInTheHouse':
                return { 'background-image': 'url(' + require('@/assets/casaFogo.png') + ')' };
                case 'EndOfTheWorld':
                return { 'background-image': 'url(' + require('@/assets/fimMundo.png') + ')' };
                case 'ZombiApocalipse':
                return { 'background-image': 'url(' + require('@/assets/apocalipseZumbi.png') + ')' };
                case 'NaturalDisaster':
                return { 'background-image': 'url(' + require('@/assets/desastreNatural.png') + ')' };
                default:
                return {};
            }
        },
        currentUrl() {
            return this.$route.path;
        },
    },
    data(){
        return{
            showText:true,
            showLista:false,
            yesLista: false,
            itens: [],
            selectedItems: [],
            buttonContinue: "continuar",
            buttonVoltar: "voltar",
        }
    },
    mounted() {
    if(this.currentUrl === '/houseFire/FireInTheHouse'){
        this.itens = itensJson.objetos_quarto;
        }
    if(this.currentUrl === '/houseFire/EndOfTheWorld'){
        this.itens = itensJson.objetos_fim_do_mundo;
        }
    if(this.currentUrl === '/houseFire/ZombiApocalipse'){
        this.itens = itensJson.objetos_zombi;
        }
    if(this.currentUrl === '/houseFire/NaturalDisaster'){
        this.itens = itensJson.objetos_natual;
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
                localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
            }
        },
    }
}
</script>

<style src= "../css/Choose.css"></style>