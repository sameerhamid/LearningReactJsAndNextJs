import React from 'react'
import { CORE_CONCEPTS } from '../data'
import CoreConcept from './CoreConcept'
import Section from './Section'

function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map((concepts) => (
                    <CoreConcept {...concepts} key={concepts.title} />
                ))}
            </ul>
        </Section>
    )
}

export default CoreConcepts
