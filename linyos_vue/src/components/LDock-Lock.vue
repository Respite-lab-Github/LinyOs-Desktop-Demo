<template>
    <div class="linyos-dock">
        <nav class="linyos-left-dock">
            <nav-item>
                <div class="linyos-dock-n-item linyos-dock-n-lock"><a href="#">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4.99992 18.3333C4.54158 18.3333 4.14936 18.1702 3.82325 17.8441C3.49714 17.5181 3.33381 17.1256 3.33325 16.6666L3.33325 8.33331C3.33325 7.87498 3.49659 7.48275 3.82325 7.15664C4.14992 6.83054 4.54214 6.6672 4.99992 6.66665L5.83325 6.66665L5.83325 4.99998C5.83325 3.8472 6.23964 2.8647 7.05242 2.05248C7.86519 1.24026 8.84769 0.833869 9.99992 0.833314C11.1521 0.832758 12.1349 1.23915 12.9482 2.05248C13.7616 2.86581 14.1677 3.84831 14.1666 4.99998L14.1666 6.66665L14.9999 6.66665C15.4582 6.66665 15.8507 6.82998 16.1774 7.15664C16.5041 7.48331 16.6672 7.87554 16.6666 8.33331L16.6666 16.6666C16.6666 17.125 16.5035 17.5175 16.1774 17.8441C15.8513 18.1708 15.4588 18.3339 14.9999 18.3333L4.99992 18.3333ZM9.99992 14.1666C10.4583 14.1666 10.8507 14.0036 11.1774 13.6775C11.5041 13.3514 11.6672 12.9589 11.6666 12.5C11.666 12.0411 11.503 11.6489 11.1774 11.3233C10.8519 10.9977 10.4594 10.8344 9.99992 10.8333C9.54048 10.8322 9.14825 10.9956 8.82325 11.3233C8.49825 11.6511 8.33492 12.0433 8.33325 12.5C8.33158 12.9566 8.49492 13.3491 8.82325 13.6775C9.15158 14.0058 9.54381 14.1689 9.99992 14.1666ZM7.49992 6.66665L12.4999 6.66665L12.4999 4.99998C12.4999 4.30554 12.2568 3.71525 11.7708 3.22915C11.2846 2.74304 10.6944 2.49998 9.99992 2.49998C9.30548 2.49998 8.71519 2.74304 8.22908 3.22915C7.74298 3.71525 7.49992 4.30554 7.49992 4.99998L7.49992 6.66665Z"   fill="#463139" >
    </path>
    </svg>
                    <span>设备已锁定</span>
                </a></div>
            </nav-item>
            <nav-item>
                <div class="linyos-dock-n-item linyos-dock-n-mail"><a href="#">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3.33341 16.6667C2.87508 16.6667 2.48286 16.5036 2.15675 16.1775C1.83064 15.8514 1.6673 15.4589 1.66675 15L1.66675 5.00002C1.66675 4.54169 1.83008 4.14946 2.15675 3.82335C2.48341 3.49725 2.87564 3.33391 3.33341 3.33335L11.7501 3.33335C11.6945 3.61113 11.6667 3.88891 11.6667 4.16669C11.6667 4.44446 11.6945 4.72225 11.7501 5.00002L3.33341 5.00002L10.0001 9.16669L13.0417 7.27085C13.2362 7.45141 13.4482 7.6078 13.6776 7.74002C13.907 7.87225 14.1465 7.98669 14.3959 8.08335L10.0001 10.8334L3.33341 6.66669L3.33341 15L16.6667 15L16.6667 8.25002C16.9862 8.18058 17.2848 8.08335 17.5626 7.95835C17.8403 7.83335 18.0973 7.68058 18.3334 7.50002L18.3334 15C18.3334 15.4584 18.1703 15.8509 17.8442 16.1775C17.5182 16.5042 17.1257 16.6673 16.6667 16.6667L3.33341 16.6667ZM3.33341 5.00002L3.33341 15L3.33341 5.00002ZM15.8334 6.66669C15.139 6.66669 14.5487 6.42363 14.0626 5.93752C13.5765 5.45141 13.3334 4.86113 13.3334 4.16669C13.3334 3.47225 13.5765 2.88196 14.0626 2.39585C14.5487 1.90974 15.139 1.66669 15.8334 1.66669C16.5278 1.66669 17.1182 1.90974 17.6042 2.39585C18.0903 2.88196 18.3334 3.47225 18.3334 4.16669C18.3334 4.86113 18.0903 5.45141 17.6042 5.93752C17.1182 6.42363 16.5278 6.66669 15.8334 6.66669Z"   fill="#F7F2F5" >
    </path>
    </svg>
                </a></div>
            </nav-item>
        </nav>
    </div>
</template>
<script>
import '../assets/config.css'
export default {
    name: "LDock-Lock",
    data() {
        return {};
    },
    components: {

    },
}
</script>
<style scoped>
.linyos-dock {
    position: absolute;
    width: 100vw;
    height: 5.5vh;
    background-color: var(--warma-brown-5);
    z-index: 1;
    bottom: 0;
    backdrop-filter: blur(70px);
    opacity: 0.99;
    border-radius: 25px 25px 0 0;
}

.linyos-dock .linyos-left-dock{
    display: inline-block;
    width: calc(99vw - 0.2vw);
    position: relative;
    left: calc(0.5vw - 0.2vw);
}

.linyos-left-dock .linyos-dock-n-item{
    display: inline-block;
    position: relative;
    width: 1.6vw;
    height: 1.6vw;
    background-color: var(--warma-brown-1);
    top: calc((5.4vh - 1.6vw)/2);
    border-radius: 100%;
    margin-left: 0.3vw;
}

.linyos-left-dock .linyos-dock-n-mail svg{
    position: relative;
    left: calc((1.6vw - 20px)/2);
    top: calc((1.6vw - 20px)/2);
}

.linyos-left-dock .linyos-dock-n-lock{
    width: 4.5vw;
    background-color: var(--warma-brown-3);
    border-radius: 1.5vw;
}

.linyos-left-dock .linyos-dock-n-lock a{
    font-size: 12px;
    color: var(--warma-brown-1);
    outline: none;
    display: inline-block;
    position: relative;
    text-align: center;
    text-decoration: none;
    top: calc(0.5*(1.6vw - 20px));
    left: 8px;
    font-weight: bold;
}

.linyos-left-dock .linyos-dock-n-lock span{
    position: relative;
    top: -5px;
    left: 5px;
}
</style>