import { CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"

type ProjectHeaderProps = {
    title: string,
    date: string
}
export const ProjectHeader = ({ title, date }: ProjectHeaderProps) => {
    return (
        <header className="flex gap-4 items-center">
            <CardTitle>{title}</CardTitle>
            <Separator orientation="vertical" className="h-8" />
            <span>{date}</span>
        </header>
    )
}