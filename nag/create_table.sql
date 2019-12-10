CREATE TABLE public."User"
(
    id serial NOT NULL,
    lastname character varying,
    firstname character varying,
    email character varying,
    age integer,
    active boolean,
    PRIMARY KEY (id),
    CONSTRAINT unique_email_constraint UNIQUE (email)

)
WITH (
    OIDS = FALSE
);

ALTER TABLE public."User"
    OWNER to postgres;