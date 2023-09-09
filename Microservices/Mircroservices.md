<samp>

[Microservices](https://medium.com/@nicholasgcc/building-scalable-e-commerce-backend-with-microservices-exploring-design-decisions-node-js-b5228080403b)

[tight and loose coupling](https://cleancommit.io/blog/whats-the-difference-between-tight-and-loose-coupling/#:~:text=A%3A%20Tight%20coupling%20refers%20to,and%20can%20operate%20more%20independently.)

# Microservices

    Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.
    Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.

## Monolithic vs. Microservices Architecture

    With monolithic architectures, all processes are tightly coupled and run as a single service.
    Example: All components of the application, such as search, rating and review, and payment each, are interconnected within a single codebase.
    With a microservices architecture, an application is built as independent components that run each application process as a service.
    Example: E-commerce application: Each microservice is focused on a single business capability. For example, search, rating and review, and payment each have their instance (server) and communicate with each other.

### Steps

Create api-gateway, auth, products, orders apps and install packages
Set environment variables, Create all models and configs

</samp>
