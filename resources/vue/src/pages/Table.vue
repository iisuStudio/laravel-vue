<template>
    <default-layout>
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
    </default-layout>
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
        name: 'Table',
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
        }
    }
</script>

<style lang="scss" scoped></style>
