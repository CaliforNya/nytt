function cards(content) {
  let cardEl = document.querySelector(".box");

  if (content === "planets") {
    cardEl.innerHTML = `
      <div class="box" id="planets">
        <div class="card">
          <h2>PLANETS</h2>
          <div id="name" class="content">
            <p class="info">
            Planets are large celestial bodies that orbit stars, such as the Sun. Our solar system has eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. These planets vary greatly in size, composition, and distance from the Sun. Some planets, like Earth, support life, while others, like Jupiter, are made mostly of gas. Planets feature diverse characteristics, including atmospheres, moons, and rings. For example, Saturn’s rings are iconic, while Jupiter’s Great Red Spot is a massive storm. Each planet’s unique features help shape the dynamics of the solar system.
Planets also have different surface conditions, from the scorching heat of Venus to the icy cold of Neptune, making them fascinating subjects of study in astronomy.
            </p>
            <img class="photo1" src="./img/planets1.jpg" alt="planet earth seen from space" />
            <img class="photo2" src="./img/planet.jpg" alt="solar system" />
            <p class="trivia">
              Did you know?! <br><br>
              Planets in our Solar System vary in size and composition. For example, Jupiter is the largest, mostly made of gases, while Mars, though smaller, has a surface similar to Earth’s, with mountains taller than Mount Everest. Each planet has its own unique characteristics!
            </p>
          </div>
        </div>
      </div>
    `;
  } else if (content === "stars") {
    cardEl.innerHTML = `
      <div id="stars">
        <div class="card">
          <h2>STARS</h2>
          <div id="name" class="content">
            <p class="info">
              Stars are massive celestial bodies made up of hot gases, primarily hydrogen and helium, that emit light and heat due to nuclear fusion occurring in their cores. They vary in size, brightness, and temperature, and they form in large clouds of gas and dust. Our Sun is a star, providing the energy needed for life on Earth. Some stars are much larger and hotter than the Sun, while others are smaller and cooler. Over time, stars evolve, often expanding into red giants before eventually collapsing into white dwarfs, neutron stars, or even black holes. Stars also have lifecycles influenced by their mass, and many are found in groups known as star clusters.
            </p>
            <img class="photo1" src="./img/stars.jpg" alt="stars" />
            <img class="photo2" src="./img/stars1.jpg" alt="stars" />
            
            <p class="trivia">
            Did you know?! <br><br>
              Stars can be millions of years old, and some are so far away that the light we see today started its journey before humans even existed. The brightest stars we see at night may not always be the closest; their distance and size make them appear more luminous from Earth.
            </p>
          </div>
        </div>
      </div>
    `;
  } else if (content === "galaxies") {
    cardEl.innerHTML = `
      <div id="galaxies">
        <div class="card">
          <h2>GALAXIES</h2>
          <div id="name" class="content">
            <p class="info">
Galaxies are vast systems of stars, gas, dust, and dark matter, bound together by gravity. They come in various shapes, including spiral, elliptical, and irregular. Our own galaxy, the Milky Way, is a spiral galaxy. Galaxies can range in size from small, containing a few million stars, to giants with over a trillion stars. They often form clusters and can collide, merging to create new structures over billions of years. Studying galaxies helps us understand the universe's formation and evolution.The observation of distant galaxies also provides a glimpse into the past, revealing how the universe looked billions of years ago.
            </p>
            <img class="photo1" src="./img/galaxy1.jpg" alt="galaxy" />
            <img class="photo2" src="./img/galaxy.jpg" alt="galaxies" />
            <p class="trivia">
            Did you know?! <br><br>
            The Milky Way galaxy is home to our solar system and contains over 100 billion stars! It's estimated to be about 100,000 light-years wide, and it’s on a collision course with the nearby Andromeda galaxy, though the collision won't happen for another 4 billion years!
            </p>
          </div>
        </div>
      </div>
    `;
  } else if (content === "nebulae") {
    cardEl.innerHTML = `
      <div id="nebulae">
        <div class="card">
          <h2>NEBULAE</h2>
          <div id="name" class="content">
            <p class="info"> 
            Nebulae are vast clouds of gas and dust in space, often known as star nurseries. They come in different types, such as emission, reflection, and dark nebulae. Emission nebulae glow due to ionized gases, while reflection nebulae shine by reflecting light from nearby stars. Dark nebulae block light from stars behind them. Nebulae play a crucial role in star formation, with collapsing regions eventually creating new stars. These cosmic clouds are not only beautiful but essential for the ongoing evolution of galaxies. Some nebulae, like the famous Orion Nebula, are visible to the naked eye, while others are far too distant to observe without advanced telescopes. The study of nebulae helps astronomers understand the processes that drive the birth and death of stars, offering insight into the dynamic life cycle of galaxies
            </p>
            <img class="photo1" src="./img/nebulae1.jpg" alt="nebulae" />
            <img class="photo2" src="./img/nebulae.jpg" alt="nebulae" />
            <p class="trivia">
            Did you know?! <br><br>
The largest known nebula, the Tarantula Nebula, spans over 1,000 light-years across and is home to some of the most massive stars ever discovered. It's located in the Large Magellanic Cloud, a neighboring galaxy to the Milky Way, and is a stellar nursery where new stars are constantly being formed.            </p>
          </div>
        </div>
      </div>
    `;
  } else if (content === "blackholes") {
    cardEl.innerHTML = `
      <div id="blackholes">
        <div class="card">
          <h2> BLACK HOLES</h2>
          <div id="name" class="content">
            <p class="info"> 
Black holes are regions of space where gravity is so intense that not even light can escape. They form when massive stars collapse at the end of their life cycle, creating a singularity—a point of infinite density. The boundary surrounding a black hole, called the event horizon, is the point of no return. Black holes come in different sizes, from stellar black holes formed by collapsing stars to supermassive black holes found at the centers of galaxies. These cosmic giants can have millions or even billions of times the mass of our Sun. Their powerful gravitational pull influences the orbits of nearby stars and can even bend light, making them key players in the evolution of galaxies. Scientists continue to study black holes to better understand their role in the universe. </p>
     <img class="photo1" src="./img/blackhole1.jpg" alt="blackhole" />
            <img class="photo2" src="./img/blackhole.jpg" alt="blackhole" />
            <p class="trivia">
            Did you know?! <br><br>
Black holes can "sing"! When two black holes merge, they release gravitational waves—ripples in spacetime—that can be detected by special instruments like LIGO. These waves carry information about the black holes' masses and spins, helping scientists study these invisible cosmic giants in a way that was previously impossible.          </div>
        </div>
      </div>
    `;
  } else if (content === "asteroids") {
    cardEl.innerHTML = `
      <div id="asteroids">
        <div class="card">
          <h2>ASTEROIDS</h2>
          <div id="name" class="content">
            <p class="info"> Asteroids are rocky objects that orbit the Sun, primarily in the asteroid belt between Mars and Jupiter. They vary in size from small boulders to objects hundreds of kilometers wide. These space rocks are made of materials left over from the formation of the solar system. Some asteroids contain valuable metals like gold and platinum, which makes them of interest for future exploration. While most asteroids are harmless and orbit safely, larger ones have the potential to pose a threat to Earth if their paths cross with ours.
Asteroids can sometimes collide with one another, creating smaller fragments that may become new objects in the solar system.
</p>       
     <img class="photo1" src="./img/asteroids.jpg" alt="asteroids" />
            <img class="photo2" src="./img/asteroids1.jpg" alt="asteroids" />
            <p class="trivia">
            Did you know?! <br><br>
Some asteroids have moons! These "binary asteroids" consist of a large asteroid and a smaller one orbiting around it. One famous example is the asteroid 243 Ida, which has a moon named Dactyl. This discovery helped scientists learn more about the formation of asteroid systems.          </div>
        </div>
      </div>
    `;
  } else if (content === "supernovae") {
    cardEl.innerHTML = `
      <div id="supernovae">
        <div class="card">
          <h2>SUPERNOVAE</h2>
          <div id="name" class="content">
            <p class="info">
            Supernovae are powerful explosions that occur when a star reaches the end of its life cycle. These events release enormous amounts of energy, briefly outshining entire galaxies. There are two main types of supernovae: Type I, caused by the sudden collapse of a white dwarf, and Type II, resulting from the collapse of massive stars. Supernovae are important for the universe’s evolution, as they distribute heavy elements, like gold and iron, into space, which are later incorporated into new stars and planets.Supernovae also play a key role in the formation of neutron stars and black holes, which are some of the most fascinating and mysterious objects in the universe.
            </p>
            <img class="photo1" src="./img/supernova1.jpg" alt="supernoave" />
            <img class="photo2" src="./img/supernova.jpg" alt="supernovae" />
            <p class="trivia">
            Did you know?! <br><br>
When a star goes supernova, it can create elements heavier than iron, such as gold and platinum. These elements are scattered into space, where they can eventually form new stars, planets, and even life. In fact, the gold in your jewelry may have originated from the explosion of a star that occurred long before the Earth was even formed!          </div>
        </div>
      </div>
    `;
  } else if (content === "phenomena") {
    cardEl.innerHTML = `
      <div id="phenomena">
        <div class="card">
          <h2>ASTRONOMICAL PHENOMENA</h2>
          <div id="name" class="content">
            <p class="info">Astronomical phenomena refer to natural events in space that are observable from Earth. These include a variety of occurrences such as eclipses, meteor showers, auroras, and comets. Eclipses occur when one celestial body blocks the light from another, like the Moon blocking the Sun during a solar eclipse. Meteor showers happen when Earth passes through the debris left by comets, creating streaks of light in the sky. Auroras, also known as the Northern and Southern Lights, are caused by charged particles from the Sun interacting with Earth's magnetic field. Comets are icy bodies that leave behind glowing trails as they approach the Sun. These phenomena offer a glimpse into the dynamic and ever-changing nature of the universe.</p>

            <img class="photo1" src="./img/aphenomena1.jpg" alt="nebulae" />
            <img class="photo2" src="./img/aphenomena.jpg" alt="nebulae" />
            <p class="trivia">
            Did you know?! <br><br>
The Perseid meteor shower, visible every August, is one of the brightest and most active meteor showers. It’s caused by Earth passing through debris from the Swift-Tuttle comet. Some Perseid meteors can be so bright that they leave a glowing trail in the sky!          </div>
        </div>
      </div>
    `;
  } else if (content === "home") {
    cardEl.innerHTML = `
      <div id="home">
      <div class="card" id="cosmos">
          
 <h1>COSMOS</h1>


    `;
  } else {
    cards(home);
  }
}
window.onload = function () {
  cards("home");
};
