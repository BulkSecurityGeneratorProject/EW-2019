-- Aposta_Participante [rel4]
alter table `participante`  add column  `aposta_oid`  integer;
alter table `participante`   add index fk_participante_aposta (`aposta_oid`), add constraint fk_participante_aposta foreign key (`aposta_oid`) references `aposta` (`oid`);


