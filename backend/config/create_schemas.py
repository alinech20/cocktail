from sqlalchemy import event, text

from .db import Base

@event.listens_for(Base.metadata, "before_create")
def create_schemas(target, connection, **kw):

    schemas = set()
    for table in target.tables.values():
        if table.schema is not None:
            schemas.add(table.schema)

    for schema in schemas:
        query = "CREATE SCHEMA IF NOT EXISTS %s" % schema
        connection.execute(text(query))


@event.listens_for(Base.metadata, "after_drop")
def drop_schemas(target, connection, **kw):

    schemas = set()
    for table in target.tables.values():
        if table.schema is not None:
            schemas.add(table.schema)

    for schema in schemas:
        query = "DROP SCHEMA IF EXISTS %s" % schema
        connection.execute(text(query))
