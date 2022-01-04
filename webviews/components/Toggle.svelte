<script lang="ts">
    export let option1 : string;
    export let option2 : string;
</script>

<div class="toggle">
    <p>
        {option1}
    </p>
    <p>
    </p>
    <p>
        {option2}
    </p>
</div>

<style>
    .toggle {
        height: 30px;
        width: 60px;
        display: flex;
        border-radius: 6px;
        border: 2px solid lightblue;
    }
</style>
