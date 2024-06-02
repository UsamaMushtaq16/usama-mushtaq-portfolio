'use client'

import { useState } from 'react';
import { skill } from '@/types/main';
import SkillCard from "./SkillCard"
import SectionWrapper from '../SectionWrapper';

interface Props {
    skillData: skill[]
}

const Skills = ({ skillData }: Props) => {

    return (
        <SectionWrapper id='services' className="py-8 min-h-screen mt-10 md:mt-0 mx-2 md:mx-0 xl:my-10 2xl:my-0">
            <h2 className="text-4xl text-center">Services</h2>

            <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
                {skillData.map((s: any, i: number) => (
                    <SkillCard key={i} {...s} />
                ))}
            </div>

        </SectionWrapper>
    )
}

export default Skills