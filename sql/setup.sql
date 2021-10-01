DROP TABLE IF EXISTS materials;

CREATE TABLE materials (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    -- date TEXT NOT NULL,
    material TEXT NOT NULL,
    piece TEXT NOT NULL,
    color TEXT NOT NULL,
    have BOOL NOT NULL
)