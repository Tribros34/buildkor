"use client";

import { IdHero } from "@/components/id/IdHero";
import { IdProblem } from "@/components/id/IdProblem";
import { IdHow } from "@/components/id/IdHow";
import { IdSectors } from "@/components/id/IdSectors";
import { IdFeatures } from "@/components/id/IdFeatures";
import { IdCta } from "@/components/id/IdCta";

export default function BuildKorIdPage() {
    return (
        <main className="bg-background">
            <IdHero />
            <IdProblem />
            <IdHow />
            <IdSectors />
            <IdFeatures />
            <IdCta />
        </main>
    );
}
