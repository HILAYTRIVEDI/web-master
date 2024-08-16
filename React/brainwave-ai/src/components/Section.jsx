import SectionSvg from '../../public/assets/svg/SectionSvg'

const Section = ({
    children,
    className,
    id,
    crosses,
    crossesOffset,
    customPaddings
}) =>
{
    return (
        <section
            id={id}
            className={`
                relative
                ${className || ''}
                ${customPaddings || `lg:py-16 xl:py-20 py-10`}
                ${crosses ? 'lg:py-32 xl:py-40' : ''}
            `}
        >
            {children}
            <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
            <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10"/>
            {
                crosses && (
                    <>
                        <div
                            className={`hidden absolute top-0 left-7.5 left-7.5 h-0.45 bg-stroke-1
                            ${crossesOffset && crossesOffset}
                            pointer-events-none
                            lg:block xl:left-10 right-10
                        `}
                        />
                        <SectionSvg crossesOffset={crossesOffset} />
                    </>
                )
            }
        </section>
    )
}

export default Section