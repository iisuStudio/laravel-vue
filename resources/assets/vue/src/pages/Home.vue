<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">My Title</span>
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
                    <router-link to="/hello">
                    <md-list-item>
                        <md-icon>face</md-icon>
                        <span class="md-list-item-text">Hello</span>
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
                <H2>Table</H2>
                <TableNoStyle />
                <H2>Table Basic</H2>
                <TableBasic />
                <H2>Table Card</H2>
                <TableCard />
                <H2>Table Template Slot</H2>
                <TableTemplate />
                <H2>Table Sort</H2>
                <TableSort />
                <H2>Table Custom Sort</H2>
                <TableCustomSort />
                <H2>Table Fixed Header</H2>
                <TableFixed />
                <H2>Table Search Name</H2>
                <TableSearch />
                <H2>Table Single Select</H2>
                <TableSingle />
                <H2>Table Multiple Select</H2>
                <TableMultiple />
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    import TableNoStyle from '../components/Table/TableNoStyle.vue';
    import TableBasic from '../components/Table/TableBasic.vue';
    import TableCard from '../components/Table/TableCard.vue';
    import TableTemplate from '../components/Table/TableTemplate.vue';
    import TableSort from '../components/Table/TableSort.vue';
    import TableCustomSort from '../components/Table/TableCustomSort.vue';
    import TableFixed from '../components/Table/TableFixed.vue';
    import TableSearch from '../components/Table/TableSearch.vue';
    import TableSingle from '../components/Table/TableSingle.vue';
    import TableMultiple from '../components/Table/TableMultiple.vue';
    export default {
        name: 'Home',
        components: {
            TableNoStyle,
            TableBasic,
            TableCard,
            TableTemplate,
            TableSort,
            TableCustomSort,
            TableFixed,
            TableSearch,
            TableSingle,
            TableMultiple
        },
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
