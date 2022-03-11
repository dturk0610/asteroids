# This repo will contain the HTML implementation of the Atari game Asteroids

This game will be written by Dakota Turk and Harrison Walker

## Controls

The controls of the game will likely be very simple. A brief example:

W - Move Forward
A - Turn Left
S - Hyperspace Jump
D - Turn Right
Space - Shoot

We do not claim to own this game or any of its intellectual property (if any) we simply are making this game for our Computer Graphics course.

## Goals

The goal of the game is pretty straight forward. The player is a small triangular space ship that flies around space avoiding fast and slow moving asteroids.

In order to evade the asteroids, the player can shoot them down with their built on cannon or jump into hyper space and attempt a dodge.

## Implementation

Asteroids:
- Each asteroid has a center, a velocity, and an array containing the vertices
- To create a brand new asteroid, first a random position on the screen is picked to be the center
- Next, 12 points evenly rotated around the center are generated at random radius from the center
- Finally, a random velocity vector is also generated
- Break off asteroids are generated at the same position as the parent asteroid but with a smaller radius and different velocity vector

Player:

Score:

Sound: