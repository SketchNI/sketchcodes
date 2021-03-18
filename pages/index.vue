<template>
    <div class="px-4 lg:px-0 mb-4 lg:mb-0">
        <h1>About Sketch</h1>
        <h2>A personal history</h2>

        <div class="border border-gray-900 bg-gray-800 rounded p-8">
            <p>Hi, I'm Denver. I'm a {{ age }} year old programmer, gamer and musician from Northern Ireland.</p>

            <p>
                I first got interested in computers when I was around 10 or 11. By the time I was 15 I was experimenting
                with C# and had even built a very basic web browser.
            </p>

            <p>
                At that time I had no interest in building desktop applications and started to focus on making websites
                using Microsoft Frontpage 2003. After a while, I decided that I didn't want to drag and drop, I wanted to
                write the fancy symbols that Frontpage generated.
            </p>

            <p>
                I sort of got decent at this and decided to try adding CSS to the mix. That's still a beast I'm not
                comfortable with. It would be a couple of years before I got interested in learning PHP. When I was 17,
                that time arrived! I started to work with PHP and built several working websites using all 3 technologies
                I had learned. They were awful. The PHP I had written was the kind that got PHP its bad reputation.
                The HTML and CSS was horrid but I was proud at the time to have created something.
            </p>

            <p>
                Moving on 12 years from I first touched PHP, here I am. Writing my very first entirely Typescript
                and VueJS powered website!
            </p>

            <p>
                My main goal is to create applications that people find useful and I try to work on every idea I have
                to try and achieve that goal.
            </p>
        </div>

        <div class="mt-4">
            <div class="w-full grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 space-y-4 lg:space-y-0">
                <div class="border border-gray-900 bg-gray-800 rounded p-4">
                    <h3 class="text-lg font-semibold">Programming Info:</h3>
                    <ul class="list-disc list-inside mt-4">
                        <li>
                            <span class="label">Languages:</span> PHP, Javascript, C#.
                        </li>
                        <li><span class="label">IDE/Editors:</span> PhpStorm, Rider, Visual Studio and VS Code</li>
                        <li>
                            <span class="label">Operating Systems:</span>
                            <ul class="list-disc list-inside ml-6">
                                <li>Windows 10 Pro</li>
                                <li>WSL 2 Ubuntu 20.04</li>
                                <li>Linux Mint 20</li>
                                <li>Mac OSX Catalina</li>
                            </ul>
                        </li>
                        <li><span class="label">Browsers:</span> Chrome, Chrome Dev, Firefox, Firefox Nightly</li>
                        <li><span class="label">Other:</span> Docker, Windows Terminal</li>
                    </ul>
                </div>

                <div class="border border-gray-900 bg-gray-800 rounded p-4">
                    <h3 class="text-lg font-semibold">Gaming Info:</h3>
                    <ul class="list-disc list-inside mt-4">
                        <li>
                            <span class="label">Platforms:</span> PC
                            <ul class="list-disc list-inside ml-6">
                                <li>
                                    <span class="label">Steam:</span>&nbsp;
                                    <a href="https://steamcommunity.com/id/sketchni" rel="nofollow,noopenner">Sketch on
                                        Steam
                                    </a>
                                </li>
                                <li>
                                    <span class="label">Origin:</span>&nbsp;Search <span
                                    class="font-bold">SketchNI</span>
                                </li>
                                <li>
                                    <span class="label">UPlay:</span>&nbsp;
                                    <a href="https://club.ubisoft.com/en-GB/profile/SketchNI" rel="nofollow,noopenner">Sketch
                                        on UPlay
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Computer Specs:</span>
                            <ul class="list-disc list-inside ml-6">
                                <li><span class="label">CPU:</span> AMD Ryzen 5 3600 3.6GHz (Overclocked to 4.2GHz)</li>
                                <li><span class="label">CPU Cooler:</span> Cooler Master MasterLiquid Lite 240 AIO</li>
                                <li><span class="label">RAM:</span> Corsair Vengeance DDR4-3200 RGB - 32GB (4x8GB)</li>
                                <li><span class="label">GPU:</span> MSI GTX 1660Ti</li>
                                <li><span class="label">Motherboard:</span> MSI B450 Tomahawk MAX</li>
                                <li>
                                    <span class="label">Storage:</span>
                                    <ul class="list-disc list-inside ml-6">
                                        <li><span class="label">m.2:</span> 500GB Western Digital Blue SSD (non-NVMe)
                                        </li>
                                        <li><span class="label">SSD:</span> 250GB Crucial SSD</li>
                                        <li><span class="label">HDD:</span> 2x2TB Western Digital Blue</li>
                                    </ul>
                                </li>
                                <li><span class="label">Keyboard:</span> Corsair K95 Platinum RGB (Cherry MX Blue
                                    switches)
                                </li>
                                <li><span class="label">Mouse:</span> Corsair M55 RGB</li>
                                <li><span class="label">Headset:</span> Corsair Void Pro RGB - Carbon</li>
                                <li><span class="label">Monitor 1:</span> HP Pavilion 23xi</li>
                                <li><span class="label">Monitor 2:</span> AOC 2369M</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",

    beforeMount() {
        window.document.title = `Home - SketchNI.Codes`;
    },

    computed: {
        age() {
            const dob = new Date("1991/02/04");
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const m = today.getMonth() - dob.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                age--;
            }
            return age;
        }
    }
};
</script>

<style lang="postcss" scoped>
h1 {
    @apply text-3xl;
}

h2 {
    @apply text-xl mb-6;
}

p {
    @apply mb-4 text-gray-300 text-sm md:text-base lg:text-xl;
}

p:last-child {
    @apply mb-0;
}

li {
    @apply mb-1;
}

.label {
    @apply text-gray-400 font-bold uppercase inline-block;
}
</style>
