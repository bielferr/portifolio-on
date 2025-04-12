import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Project Exemple",
            subtitle: "março 2025 - março 2025",
            srcImg: "src/assets/images/system.png",
            description: "Sistema simples para gerenciar usuários. Este projeto permite adicionar, visualizar e excluir usuários de um sistema. Ele foi criado com o propósito de praticar conceitos básicos de programação e controle de dados.",
            technologies: "Technologies: JavaScript, HTML,CSS",
            websiteURL: "https://github.com/bielferr/systemOfUsers",
            codeURL: "https://github.com/bielferr/systemOfUsers",
        },
        {
            title: "Gerador de qr code",
            subtitle: "maio 2024 - maio 2024",
            srcImg: "src/assets/images/gerador-qr-code.png",
            description: "este é um gerador de qrcode gratuito para ajudar as pessoas",
            technologies: "Technologies: JavaScript, HTML, CSS, ",
            websiteURL: "https://qrgerador.netlify.app/",
            codeURL: "https://github.com/bielferr/gerador-QrCode/",
        },
        {
            title: "crudify-tasks",
            subtitle: "out 2024 - nov 2024",
            srcImg: "src/assets/images/server.png",
            description: "Servidor Node.js - Projeto de Tarefas (Back-nd) Este projeto é um servidor desenvolvido em Node.js para gerenciar operações básicas com tarefas (CRUD). O projeto inclui a manipulação de streams, desestruturação de objetos, gerenciamento de estados e um sistema básico de rotas.",
            technologies: "Technologies: JavaScript",
            websiteURL: "",
            codeURL: "https://github.com/bielferr/server-node.js",
        },
        {
            title: "Heart for baby",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "src/assets/images/coracao.png",
            description: "Projeto para namorados e namoradas presentearem seus amados",
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://datinghappy.netlify.app/",
            codeURL: "https://github.com/bielferr/heart-baby",
        },

        {
            title: "FlowBank",
            subtitle: "nov 2024 - dez 2024",
            srcImg: "src/assets/images/flow.png",
            description: " API REST de transações com autenticação, controle por usuário e testes automatizado",
            technologies: "Technologies: TypeScript, HTML, CSS, MYSQL",
            websiteURL: "",
            codeURL: "https://github.com/bielferr/Api-rest-node",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
