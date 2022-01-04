<script lang="ts">
import Toggle from "./Toggle.svelte";

</script>

<h1>Helth</h1>
<p>
    This extension is a reminder to follow the 20/20/20 rule, and to maybe
    remind you to stand up using your standing desk.
</p>

<h3>
    20/20/20
</h3>

<Toggle option1="Sound" option2="Notification"></Toggle>

<h3>
    Standing Reminder
</h3>

<Toggle option1="Sound" option2="Notification"></Toggle>

<p>
    This is not a substitute for a healthy lifestyle, but it is a reminder to
    keep your eyes and your body healthy.
</p>

<p>
    The 20/20/20 rule means that, in order for you to maintain your eyes' helth,
    you must make a 20 second pause looking at something 20 feet away every 20
    minutes of your time looking at the computer
</p>

<style>
    h1 {
        color: yellow;
    }
</style>
