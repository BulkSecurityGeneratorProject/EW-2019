-- User_Aposta [rel2]
alter table `aposta`  add column  `user_oid`  integer;
alter table `aposta`   add index fk_aposta_user (`user_oid`), add constraint fk_aposta_user foreign key (`user_oid`) references `user` (`oid`);


-- Evento_Aposta [rel7]
create table `evento_aposta` (
   `evento_oid`  integer not null,
   `aposta_oid`  integer not null,
  primary key (`evento_oid`, `aposta_oid`)
);
alter table `evento_aposta`   add index fk_evento_aposta_evento (`evento_oid`), add constraint fk_evento_aposta_evento foreign key (`evento_oid`) references `evento` (`oid`);
alter table `evento_aposta`   add index fk_evento_aposta_aposta (`aposta_oid`), add constraint fk_evento_aposta_aposta foreign key (`aposta_oid`) references `aposta` (`oid`);


-- Participante_Aposta [rel8]
alter table `aposta`  add column  `participante_oid`  integer;
alter table `aposta`   add index fk_aposta_participante (`participante_oid`), add constraint fk_aposta_participante foreign key (`participante_oid`) references `participante` (`oid`);


