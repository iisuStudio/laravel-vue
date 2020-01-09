<template>
    <NoSidebarLayout>
        <md-empty-state
            md-icon="access_time"
            md-label="Nothing in Snoozed"
            md-description="Anything you snooze will go here until it's time for it to return to the inbox.">
        </md-empty-state>
        <div>
            <router-link to="/">
                <md-button class="md-raised md-primary">回首頁</md-button>
            </router-link>
        </div>
    </NoSidebarLayout>
</template>

<script>
    export default {
    }
</script>
