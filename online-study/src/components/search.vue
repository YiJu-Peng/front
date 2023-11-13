<template>
    <div class="searchContainer">
        <input class="searchInput" placeholder="搜索一下，码上开始" @blur="onBlur">
        <button class="searchButton" :class="{ active: buttonClicked }" @click="onButtonClick">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            buttonClicked: false
        }
    },
    methods: {
        onButtonClick() {
            this.buttonClicked = true;
        },
        onBlur() {
            if (!this.inputValue.trim()) {
                this.inputValue = '搜索一下，码上开始';
                this.buttonClicked = false;
            }
        }
    }
}
</script>

<style>
.searchContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
    border: 3px solid #ECA817;
    width: 34%; 
    height: 30px;
    border-radius: 5px;
    padding: 5px;
    margin-left:40% ;
}
.searchInput {
    width: 100%;
    height: 15px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}
.searchInput:focus{
    outline: none;
}
.searchButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 29px;
    margin-left: 10px;
    border: none;
    border-radius: 25px;
    background-color: #ECA817;
    cursor: pointer;
}
.searchButton svg {
    width: 20px;
    height: 20px;
    fill: white;
}
.searchButton.active {
  background-color: rgb(218, 126, 14);
}
</style>