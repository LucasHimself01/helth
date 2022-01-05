<script lang="ts">
    let isLookAwayActive = true;
    let isStandUpActive = true;

    function notifyLookAway() {
        if (isLookAwayActive) {
            tsvscode.postMessage({
                command: "alertLookAway",
            });
        }
        setTimeout(notifyLookAway, 1200000);
    }

    function notifyStandUp() {
        if (isStandUpActive) {
            tsvscode.postMessage({
                command: "alertStandUp",
            });
        }
        setTimeout(notifyStandUp, 3600000);
    }

    setTimeout(notifyLookAway, 1200000);
    setTimeout(notifyStandUp, 3600000);
</script>

<h1>Helth</h1>
<p>
    This extension is a reminder to follow the 20/20/20 rule, and to maybe
    remind you to stand up using your standing desk.
</p>

<h3>20/20/20</h3>

{#if isLookAwayActive}
    <p class="green">Active</p>
{:else}
    <p class="red">Inactive</p>
{/if}

<button
    on:click={() => {
        isLookAwayActive = !isLookAwayActive;
    }}
>
    Toggle 20/20/20 Reminder
</button>

<h3>Standing Reminder</h3>

{#if isStandUpActive}
    <p class="green">Active</p>
{:else}
    <p class="red">Inactive</p>
{/if}

<button
    on:click={() => {
        isStandUpActive = !isStandUpActive;
    }}
>
    Toggle Stand Up Reminder
</button>

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

    .green {
        color: green;
    }

    .red {
        color: red;
    }
</style>
