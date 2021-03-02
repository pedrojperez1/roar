-- seed.sql

INSERT INTO achievements ("name", "description", "type", "level", "createdAt", "updatedAt")
VALUES
      ('Scout', 'Completed first task!', 'assignment', 1, NOW(), NOW()),
      ('Trooper', 'Completed 5 tasks!', 'assignment', 2, NOW(), NOW()),
      ('Veteran', 'Completed 10 tasks!', 'assignment', 3, NOW(), NOW()),
      ('Socialite', 'Followed a user!', 'follow', 1, NOW(), NOW()),
      ('Town Crier', 'First post to your feed!', 'post', 1, NOW(), NOW()),
      ('Climber', 'Created first mountain!', 'mountain', 1, NOW(), NOW()),
      ('Sherpa', 'Completed first Base Camp!', 'assignment', 2, NOW(), NOW())
;