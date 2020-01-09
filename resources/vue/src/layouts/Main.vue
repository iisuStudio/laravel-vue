<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">Laravel-vue</span>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span>Navigation</span>

                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button md-dense" @click="toggleMenu">
                            <md-icon>keyboard_arrow_left</md-icon>
                        </md-button>
                    </div>
                </md-toolbar>

                <md-list>
                    <router-link to="/login">
                        <md-list-item>
                            <md-icon>supervised_user_circle</md-icon>
                            <span class="md-list-item-text">Login</span>
                        </md-list-item>
                    </router-link>

                    <router-link to="/hello">
                        <md-list-item>
                            <md-icon>face</md-icon>
                            <span class="md-list-item-text">Hello</span>
                        </md-list-item>
                    </router-link>

                    <router-link to="/table">
                        <md-list-item>
                            <md-icon>list</md-icon>
                            <span class="md-list-item-text">Table</span>
                        </md-list-item>
                    </router-link>

                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>
                        <span class="md-list-item-text">Inbox</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">Sent Mail</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>delete</md-icon>
                        <span class="md-list-item-text">Trash</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>error</md-icon>
                        <span class="md-list-item-text">Spam</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>

            <md-app-content>
                <div id="content" title="主要內容區塊">
                    <slot />
                </div>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    export default {
        name: 'Main',
        data: () => ({
            menuVisible: false
        }),
        methods: {
            toggleMenu () {
                this.menuVisible = !this.menuVisible
            }
        }
    }
</script>

<style lang="scss" scoped>
    .md-app {
        min-height: 100vh;
        border: 1px solid rgba(#000, .12);
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>
