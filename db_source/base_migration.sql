

CREATE TABLE public.temperature_value (
    id integer NOT NULL,
    voltage real,
    measurement_date timestamp without time zone DEFAULT date_trunc('second'::text, (now())::timestamp without time zone),
    PRIMARY KEY (id)
);




ALTER TABLE public.temperature_value ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.temperature_value_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4010 (class 0 OID 14295185)
-- Dependencies: 223
-- Data for Name: temperature_value; Type: TABLE DATA; Schema: public; Owner: mwmvnwtr
--

INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES (1.20000005, '2023-04-25 07:11:41');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES (2, '2023-04-25 07:53:59');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES (3, '2023-04-25 07:53:59');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES (1.5, '2023-04-25 07:53:59');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES (5, '2023-04-25 09:41:17');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES (1, '2023-04-25 09:45:31');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 7, '2023-04-25 09:45:31');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 4, '2023-04-25 09:45:31');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 1.5, '2023-04-25 09:45:31');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 2, '2023-04-25 09:45:31');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 3, '2023-04-25 17:09:43');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 2, '2023-04-25 17:10:21');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 3, '2023-04-25 17:37:37');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 2, '2023-04-25 17:40:58');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 5.4000001, '2023-04-25 17:41:10');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 10, '2023-04-25 17:41:45');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 10, '2023-04-25 17:42:22');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 2, '2023-04-25 17:42:29');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 3, '2023-04-25 17:42:34');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 6, '2023-04-25 17:42:42');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 5, '2023-04-25 17:45:17');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 4, '2023-04-25 17:45:27');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 3.4000001, '2023-04-25 17:52:24');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 12, '2023-04-25 17:52:32');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 4.19999981, '2023-04-26 04:48:43');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 4.30000019, '2023-04-27 12:35:33');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 2.0999999, '2023-04-27 12:35:44');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 3.5, '2023-04-27 14:12:25');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 12, '2023-04-27 14:12:35');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 2.5, '2023-04-27 14:12:58');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 10, '2023-04-27 14:13:54');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 10, '2023-04-29 06:07:47');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 1, '2023-05-11 06:26:29');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 2, '2023-05-11 06:26:53');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 5.19999981, '2023-05-12 07:12:55');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 5, '2023-05-13 16:54:51');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 1.70000005, '2023-05-14 12:20:28');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 2.5, '2023-05-14 12:20:42');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 3.20000005, '2023-05-14 12:20:55');
INSERT INTO public.temperature_value (  voltage, measurement_date) OVERRIDING SYSTEM VALUE VALUES ( 1.20000005, '2023-05-14 12:21:20');
