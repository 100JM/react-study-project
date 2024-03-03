import CoreContent from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) =>
                    <CoreContent key={conceptItem.title} {...conceptItem} />
                )}
            </ul>
        </section>
    );
}

export default CoreConcepts;
