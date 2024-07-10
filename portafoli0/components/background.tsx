"use client"
import type { Container } from '@tsparticles/react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/slim';
import { loadSlim } from '@tsparticles/slim'; // Adjust imports as per your needs
import React, { useEffect, useState } from 'react';

const Background: React.FC = () => {SS
    const [particlesInitiated, setParticlesInitiated] = useState(false);

    useEffect(() => {
        const initializeParticles = async () => {
            await initParticlesEngine(async (engine: Container) => {
                await loadSlim(engine);
            });

            setParticlesInitiated(true);
        };

        initializeParticles();
    }, []);

    const particlesLoaded = (container?: Container) => {
        console.log('Particles loaded:', container);
    };

    const particlesOptions: ISourceOptions = {
        background: {
            color: {
                value: '#0d47a1',
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: 'push',
                },
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: '#ffffff',
            },
            links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce',
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    if (particlesInitiated) {
        return (
            <Particles
                id="tsparticles"
                options={particlesOptions}
                particlesLoaded={particlesLoaded}
                style={{ position: 'absolute', zIndex: 0, top: 0, left: 0, right: 0, bottom: 0 }}
            />
        );
    }

    return <div>Loading particles...</div>;
};

export default Background;