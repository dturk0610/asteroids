# This repo will contain the HTML implementation of the Atari game Asteroids

This game will be written by Dakota Turk and Harrison Walker

## Goals

The goal of the game is pretty straight forward, the player is a small triangular space ship that flies around space avoiding fast and slow moving asteroids. In order to evade the asteroids, the player can shoot them down with their built on cannon or jump into hyper space and attempt a dodge.

## Controls

The controls of the game will likely be very simple. A brief example:

W - Move Forward ![Forward Gif](Gifs/W.gif)
A - Turn Left ![Turn Left Gif](Gifs/A.gif)
S - Hyperspace Jump ![Hyperspace Gif](Gifs/S.gif)
D - Turn Right ![Turn right Gif](Gifs/D.gif)
Space - Shoot ![Shoot Gif](Gifs/Space.gif)

We do not claim to own this game or any of its intellectual property (if any) we simply are making this game for our Computer Graphics course.

## Implementation

Asteroids:

- Each asteroid has a center, a velocity, and an array containing the vertices

- To create a brand new asteroid, first a random position on the screen is picked to be the center

- Next, 12 points evenly rotated around the center are  generated at random radius from the center

- Finally, a random velocity vector is also generated

- Break off asteroids are generated at the same position as the parent asteroid but with a smaller radius and different velocity vector

Player:

Lives:

- The player has 3 lives. You loose one when you collide with an asteroid. The lives are shown at the top right of the screen using 3 player models.

Score:

Sound:

- Shooting:

<https://user-images.githubusercontent.com/50917856/157999802-10226408-f982-4d8c-b654-e8804d35f545.mp4>

- Player death:

<https://user-images.githubusercontent.com/50917856/157999813-7baeeffb-1563-4055-9e4c-11c2863e20c6.mp4>

- Asteroid explode:

<https://user-images.githubusercontent.com/50917856/157999819-19c34326-1f8d-49ff-9ac0-26172e32891e.mp4>
